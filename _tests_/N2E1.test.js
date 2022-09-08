import Person from '../app/N2E1';

jest.mock('../app/N2E1'); //Person ahora es un constructor mock

beforeEach(() => {
    // Borra todas las instancias, llamadas a constructor y métodos.
    Person.mockClear(); 
});

it('Llamada al constructor', () => {
    const person = new Person('Jose');
    expect(Person).toHaveBeenCalledTimes(1);
});

it('Verificar que se llamó al método dirNom', () => {
    //Muestra que mockClear está funcionando
    expect(Person).not.toHaveBeenCalled();

    const person = new Person();
    expect(Person).toHaveBeenCalledTimes(1);

    const mockPersonInstance = Person.mock.instance[0]; 
    const mockDirNom = mockPersonInstance.dirNom;
    expect(mockDirNom).toHaveBeenCalledWith();
    expect(mockDirNom).toHaveBeenCalledTimes(1);
});