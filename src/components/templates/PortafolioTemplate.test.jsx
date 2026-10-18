
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PortafolioTemplate from "./PortafolioTemplate";

describe("Componente PortafolioTemplate", () => {
  it("debe mostrar el encabezado, el contenido y el pie de página", () => {
    render(
      <PortafolioTemplate
        pantallaActiva="inicio"
        cambiarPantalla={vi.fn()}
      >
        <h1>Contenido de prueba</h1>
      </PortafolioTemplate>
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Contenido de prueba" })
    ).toBeInTheDocument();

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("debe mostrar los cinco botones de navegación", () => {
    render(
      <PortafolioTemplate
        pantallaActiva="inicio"
        cambiarPantalla={vi.fn()}
      >
        <p>Contenido de prueba</p>
      </PortafolioTemplate>
    );

    const botones = ["Inicio", "Estudios", "Experiencia", "Proyectos", "Contacto"];

    botones.forEach((nombre) => {
      expect(
        screen.getByRole("button", { name: nombre })
      ).toBeInTheDocument();
    });
  });

  it("debe mostrar el enlace de GitHub del Footer", () => {
    render(
      <PortafolioTemplate
        pantallaActiva="inicio"
        cambiarPantalla={vi.fn()}
      >
        <p>Contenido de prueba</p>
      </PortafolioTemplate>
    );

    expect(
      screen.getByRole("link", { name: "GitHub" })
    ).toHaveAttribute(
      "href",
      "https://github.com/IgnacioLobos-MC"
    );
  });
});
