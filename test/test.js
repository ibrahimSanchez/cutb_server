const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fetch = require('node-fetch'); // Usamos fetch para simular peticiones HTTP

// Cambia la URL base según el puerto que estés usando
const baseURL = 'http://localhost:3000';

describe("Pruebas de API - Mi colección", () => {

  describe("Colección 1 - Rutas del servidor", () => {
    it("Caso 1: La ruta /api/streams debe devolver un 200", async () => {
      const res = await fetch(`${baseURL}/api/streams`);
      assert.strictEqual(res.status, 200, 'La ruta /api/streams debe devolver un 200');
    });

    it("Caso 2: La ruta /api/auth debe devolver un 200", async () => {
      const res = await fetch(`${baseURL}/api/auth`);
      assert.strictEqual(res.status, 200, 'La ruta /api/auth debe devolver un 200');
    });

    it("Caso 3: Ruta desconocida debería devolver un 404", async () => {
      const res = await fetch(`${baseURL}/api/unknown`);
      assert.strictEqual(res.status, 404, 'Una ruta desconocida debería devolver un 404');
    });
  });

  describe("Colección 2 - Respuestas estáticas", () => {
    it("Caso 1: El servidor debe responder a una petición GET en /", async () => {
      const res = await fetch(`${baseURL}/`);
      assert.strictEqual(res.status, 200, 'La ruta raíz (/) debe devolver un 200');
    });

    it("Caso 2: El servidor debe tener una respuesta estática en /public", async () => {
      const res = await fetch(`${baseURL}/public/testfile.txt`);
      assert.strictEqual(res.status, 200, 'La ruta /public/testfile.txt debe devolver un 200');
    });
  });
});
