import { useState, useEffect } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import Tabella from '../components/Tabella';
import axios from 'axios';


function Ordini() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/orders');
      setOrders(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('Fetching orders...');
    fetchOrders();
  }, []);

  return (
    <div className="container mt-5 pt-5">
      <h1 className="mb-4">Ordini</h1>

      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {error && (
        <Alert variant="danger">
          Errore nel caricamento degli ordini: {error}
        </Alert>
      )}

      {!loading && !error && (
        <Tabella data={orders} onOrderCreated={fetchOrders} />
      )}
    </div>
  );
}

export default Ordini;
