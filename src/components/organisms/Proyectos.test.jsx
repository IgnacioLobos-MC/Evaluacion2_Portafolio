
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Proyectos from "./Proyectos";

describe("Componente Proyectos", () => {
  it("debe mostrar el título de la sección", () => {
    render(<Proyectos />);

    expect(
      screen.getByRole("heading", { name: /mis proyectos/i })
    ).toBeInTheDocument();
  });

  it("debe mostrar los enlaces a los repositorios de GitHub", () => {
    render(<Proyectos />);

    const enlaces = screen.getAllByRole("link", {
      name: /ver repositorio en github/i,
    });

    expect(enlaces).toHaveLength(2);

    expect(enlaces[0]).toHaveAttribute(
      "href",
      "https://github.com/IgnacioLobos-MC/MundoCigarroWC"
    );

    expect(enlaces[1]).toHaveAttribute(
      "href",
      "https://github.com/IgnacioLobos-MC/PruebaFormativa_PerrosyGatos"
    );
  });
});
