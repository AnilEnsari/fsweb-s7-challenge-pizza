describe("Pizzatesti", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("isim 2 karakter uyarısı veriyor mu buton disable mi?", () => {
    cy.get("[data-cy=isiminput]").type("b");
    cy.contains("İsim en az 2 karakter olmalı");
    cy.get("[data-cy=isdisabled]").should("be.disabled");
  });

  //   it("Test name validation", () => {
  //     cy.get("[data-cy=sifreinput]").type(23421);
  //     cy.contains("Şifreniz en az 6 olmalı");
  //   }); sosis sosis domates
  it("Birden fazla ek malzeme secilebiliyor mu", () => {
    cy.get("[type=checkbox]").first().check();
    cy.get('[data-cy="sogan"]').check().should("be.checked");
    cy.get('input[data-cy="sogan"]').click().should("not.be.checked");
    cy.get("input[data-cy=domates]").click().should("be.checked");
    cy.get("input[data-cy=sosis]").click().should("be.checked");

    //   cy.get("[data-cy=domates]").should("be.enabled");
    //   cy.get("[data-cy=sosis]");
  });

  it("Sayac ve hesaplama calisiyor mu ?", () => {
    cy.get(".artieksi > :nth-child(3)").click();
    cy.get(".buttonPiece").contains("2");
    cy.get(".flexHandlerToplam > :nth-child(2)").contains("300");
  });
  it("isim dogru olunca buton enable oluyor mu", () => {
    cy.get("[data-cy=isiminput]").type("anil");
    cy.get('[data-cy="sogan"]').check().should("be.checked");
    cy.get('input[data-cy="sogan"]').click().should("not.be.checked");
    cy.get("[data-cy=isdisabled]").should("be.enabled");
    cy.get("[data-cy=isdisabled]").click();
  });
});
