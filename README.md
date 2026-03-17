# Project-work

## Descrizione
Un progetto per un corso di web developer. Consiste nella homepage e in una pagini ordini in cui poter visualizzare
gli ordini di un magazzino e poterne aggiungerne di nuovi, molto semplice.

## Struttura del progetto
- `Backend`: API Laravel, migrazioni e logica business.
- `frontend`: React con Vite, routing e componenti UI.
- `Database.sql`: schema iniziale dati.

## Caratteristiche principali
- API REST per gestione ordini e risorse
- Modelli Eloquent: `Order`
- Migrazioni e factory per test e dati demo

## Installazione locale
### Backend
1. `cd Backend`
2. `composer install`
3. copiare `.env.example` in `.env`
4. configurare DB e chiavi
5. `php artisan key:generate`
6. `php artisan migrate --seed`
7. `php artisan serve`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`
4. aprire URL mostrato (es. `http://localhost:5173`)

## Note utili
- API nel file `Backend/routes/api.php`
- Modelli in `Backend/app/Models`
- Componenti e route React in `frontend/src/components` e `frontend/src/routes`
