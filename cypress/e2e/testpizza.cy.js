import { isDisabled } from "@testing-library/user-event/dist/utils";

describe("Pizzatesti", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("isim 2 karakter uyarısı veriyor mu buton disable mi?", () => {
    cy.get("[data-cy=isiminput]").type("b");
    cy.contains("İsim en az 2 karakter olmalı");
    cy.get("[data-cy=isdisabled]").should("be.disabled");
  });
  it("isim dogru olunca buton enable oluyor mu", () => {
    cy.get("[data-cy=isiminput]").type("anil");
    cy.get("[data-cy=isdisabled]").should("be.enabled");
  });
  //   it("Test name validation", () => {
  //     cy.get("[data-cy=sifreinput]").type(23421);
  //     cy.contains("Şifreniz en az 6 olmalı");
  //   }); sosis sosis domates
});
it("Birden fazla ek malzeme secilebiliyor mu", () => {
  cy.get('[data-cy="sogan"]').click().should("be.checked"); // Seçildiğini doğrula
  cy.get('[data-cy="sogan"]').click().should("not.be.checked"); // Seçilmediğini doğrula
  cy.get("[data-cy=domates]").click().should("be.checked");
  cy.get("[data-cy=sosis]").click().should("be.checked");

  //   cy.get("[data-cy=domates]").should("be.enabled");
  //   cy.get("[data-cy=sosis]");
});
