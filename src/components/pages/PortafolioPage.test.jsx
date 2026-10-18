
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PortafolioPage from "./PortafolioPage";

describe("Componente PortafolioPage", () => {
  it("debe mostrar la sección Inicio", () => {
    render(
      <PortafolioPage
        pantallaActiva="inicio"
        cambiarPantalla={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: "Ignacio Lobos" })
    ).toBeInTheDocument();
  });

  it("debe mostrar la sección Estudios", () => {
    render(
      <PortafolioPage
        pantallaActiva="estudios"
        cambiarPantalla={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", {
        name: "Mi formación académica",
      })
    ).toBeInTheDocument();
  });

  it("debe mostrar la sección Experiencia", () => {
    render(
      <PortafolioPage
        pantallaActiva="experiencia"
        cambiarPantalla={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: "Mi experiencia" })
    ).toBeInTheDocument();
  });

  it("debe mostrar la sección Proyectos", () => {
    render(
      <PortafolioPage
        pantallaActiva="proyectos"
        cambiarPantalla={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: "Mis proyectos" })
    ).toBeInTheDocument();
  });

  it("debe mostrar la sección Contacto", () => {
    render(
      <PortafolioPage
        pantallaActiva="contacto"
        cambiarPantalla={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: "Contacto" })
    ).toBeInTheDocument();
  });

  it("debe mostrar Inicio cuando la pantalla no existe", () => {
    render(
      <PortafolioPage
        pantallaActiva="pantalla-inexistente"
        cambiarPantalla={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: "Ignacio Lobos" })
    ).toBeInTheDocument();
  });
});
