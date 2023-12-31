import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    
    test('debe de reotnar un string y un numero', () => {

        const [ letter, numbers ] = retornaArreglo();

        expect( letter ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect(typeof letter).toBe('string');
        expect(typeof numbers).toBe('number');

        expect( letter ).toEqual( expect.any(String));

    });

});