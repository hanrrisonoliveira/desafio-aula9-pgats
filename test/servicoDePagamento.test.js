import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('ServicoDePagamento', () => {

    it('Realizar pagamento com a categoria cara', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoDeBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Samar');
        assert.equal(ultimoPagamento.valor, 156.87);
        assert.equal(ultimoPagamento.categoria, 'cara');

        console.log(servicoDePagamento.consultarUltimoPagamento());
    });

    it('Realizar pagamento com a categoria padrão', () => {
        // Arrange
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('103-15', 'Vivo', 100.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoDeBarras, '103-15');
        assert.equal(ultimoPagamento.empresa, 'Vivo');
        assert.equal(ultimoPagamento.valor, 100.00);
        assert.equal(ultimoPagamento.categoria, 'padrão');
        
        console.log(servicoDePagamento.consultarUltimoPagamento());
    });
});