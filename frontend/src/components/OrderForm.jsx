import Form from 'react-bootstrap/Form';

// POST to create a new order
const url = "http://127.0.0.1:8000/api/orders";

function OrderForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const newOrder = {
            cliente: form.cliente.value,
            prodotto: form.prodotto.value,
            quantita: parseInt(form.quantita.value, 10),
            data_ordine: form.data_ordine.value,
        };
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrder),
        })
        .then(response => {
            if (!response.ok) {
                props.setFormAlert([
                    'Errore di connessione al server',
                    'danger'
                ]);
                
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            props.setFormAlert(['Ordine aggiunto con successo', 'success']);
            if (props.onOrderCreated) {
                props.onOrderCreated();
            }
            props.closeModal();
        })
        .catch((error) => {
            console.error('Error:', error);
            props.setFormAlert(['Errore durante l\'aggiunta dell\'ordine', 'danger']);
            props.closeModal();
        });
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="cliente">
                    <Form.Label>Cliente</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci il nome del cliente" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="prodotto">
                    <Form.Label>Prodotto</Form.Label>
                    <Form.Control type="text" placeholder="Inserisci il nome del prodotto" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quantita">
                    <Form.Label>Quantità</Form.Label>
                    <Form.Control type="number" min="1" placeholder="Inserisci la quantità" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="data_ordine">
                    <Form.Label>Data Ordine</Form.Label>
                    <Form.Control type="date" required />
                </Form.Group>
                <button type="submit" className="btn btn-primary">
                    Aggiungi Ordine
                </button>
            </Form>
        </div>
    );
}

export default OrderForm;