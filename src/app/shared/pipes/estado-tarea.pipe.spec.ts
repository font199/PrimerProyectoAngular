import { EstadoTareaPipe } from './estado-tarea.pipe';

fdescribe('EstadoTareaPipe', () => {
  it('Crear la Instancia', () => {
    const pipe = new EstadoTareaPipe();
    expect(pipe).toBeTruthy();
  });

  it('Deberia retornar Desarollo cuando el valor es DES', () => {
    const pipe = new EstadoTareaPipe();
    expect(pipe.transform('DES')).toBe('Desarrollo');
  });

  it('Deberia retornar Producción cuando el valor es PRO', () => {
    const pipe = new EstadoTareaPipe();
    expect(pipe.transform('PRO')).toBe('Producción');
  });

  it('Deberia retornar Producción cuando el valor es vacio', () => {
    const pipe = new EstadoTareaPipe();
    expect(pipe.transform('')).toBe('Producción');
  });

  it('Deberia retornar Producción con cualquier valor distinto de DES', () => {
    const pipe = new EstadoTareaPipe();
    expect(pipe.transform('asd')).toBe('Producción');
  });

});
