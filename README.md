# Project-work

## Descrizione
Applicazione full-stack con backend Laravel e frontend React/Vite per la gestione di utenti e ordini.

## Struttura del progetto
- `Backend/`: API Laravel, modello `User`, `Order`, migrazioni e logica business.
- `frontend/`: SPA React con Vite, routing e componenti UI.
- `Database.sql`: schema iniziale/seed dati.

## Caratteristiche principali
- Autenticazione utente (Laravel Sanctum o guard personalizzabile)
- API REST per gestione ordini e risorse
- Modelli Eloquent: `User`, `Order`
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

## Esecuzione test
- Backend: `cd Backend && ./vendor/bin/phpunit`
- Frontend: `cd frontend && npm test` (se configurato)

## Note utili
- API nel file `Backend/routes/api.php`
- Modelli in `Backend/app/Models`
- Componenti e route React in `frontend/src/components` e `frontend/src/routes`

## Contribuire
1. creare branch: `git checkout -b feature/nome` 
2. commit chiari e descrittivi
3. inviare PR su main/master
4. includere test e dettagli di funzionamento

## Licenza
Aggiungi qui la licenza del progetto (es. `MIT`, `GPL-3.0`, ecc.).