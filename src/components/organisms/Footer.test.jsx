
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Componente Footer", () => {
  it("debe mostrar el nombre y la información del portafolio", () => {
    render(<Footer />);

    expect(
      screen.getByText(/2026 Ignacio Lobos/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Trabajo desarrollado con React y Vite para Duoc UC/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Estudiante de Analista Programador/i)
    ).toBeInTheDocument();
  });

  it("debe mostrar el enlace al perfil de GitHub", () => {
    render(<Footer />);

    const enlaceGitHub = screen.getByRole("link", {
      name: "GitHub",
    });

    expect(enlaceGitHub).toBeInTheDocument();

    expect(enlaceGitHub).toHaveAttribute(
      "href",
      "https://github.com/IgnacioLobos-MC"
    );

    expect(enlaceGitHub).toHaveAttribute("target", "_blank");
  });
});
