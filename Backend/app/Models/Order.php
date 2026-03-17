<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'cliente',
        'prodotto',
        'quantita',
        'data_ordine'
    ];
}
