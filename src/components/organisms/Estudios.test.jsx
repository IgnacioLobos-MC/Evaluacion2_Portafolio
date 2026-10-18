
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Estudios from "./Estudios";

describe("Componente Estudios", () => {
  it("debe mostrar el título de la sección", () => {
    render(<Estudios />);

    expect(
      screen.getByRole("heading", {
        name: "Mi formación académica",
      })
    ).toBeInTheDocument();
  });

  it("debe mostrar las tres formaciones académicas", () => {
    render(<Estudios />);

    expect(
      screen.getByRole("heading", { name: "Analista Programador" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Producción Musical" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Enseñanza Media" })
    ).toBeInTheDocument();
  });

  it("debe mostrar las instituciones educativas", () => {
    render(<Estudios />);

    expect(screen.getByText("Duoc UC")).toBeInTheDocument();

    expect(
      screen.getByText("Instituto Profesional Arcos")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Colegio José Antonio Lecaros")
    ).toBeInTheDocument();
  });

  it("debe mostrar los estados y fechas de los estudios", () => {
    render(<Estudios />);

    expect(screen.getByText("En curso")).toBeInTheDocument();

    expect(
      screen.getByText("Titulado | 2017 - 2021")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Egreso: 2016")
    ).toBeInTheDocument();
  });
});
