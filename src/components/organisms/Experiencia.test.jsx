
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experiencia from "./Experiencia";

describe("Componente Experiencia", () => {
  it("debe mostrar el título de la sección", () => {
    render(<Experiencia />);

    expect(
      screen.getByRole("heading", { name: "Mi experiencia" })
    ).toBeInTheDocument();
  });

  it("debe mostrar las experiencias de producción musical", () => {
    render(<Experiencia />);

    expect(
      screen.getByRole("heading", { name: "Producción musical" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Visions of Death - GRIM" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Plantas para sanar - No Invierno" })
    ).toBeInTheDocument();
  });

  it("debe mostrar la experiencia laboral y sus fechas", () => {
    render(<Experiencia />);

    expect(
      screen.getByRole("heading", { name: "Experiencia laboral" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "H&M - Mall Plaza Maipú" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("2022 - 2023")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "H&M - Costanera Center" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("2023 - mediados de 2024")
    ).toBeInTheDocument();
  });

  it("debe mostrar las bandas y los roles musicales", () => {
    render(<Experiencia />);

    expect(
      screen.getByRole("heading", { name: "Experiencia musical" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "No Invierno" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Bajista y Segunda Voz de la banda.")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Despertar Efímero" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Bajista de la banda.")
    ).toBeInTheDocument();
  });
});
