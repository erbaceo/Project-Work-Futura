<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class OrdersController extends Controller
{
    public function index()
    {
        $orders = Order::all();
        return response()->json($orders);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'cliente' => 'required|string|max:255',
            'prodotto' => 'required|string|max:255',
            'quantita' => 'required|integer|min:1',
            'data_ordine' => 'required|date',
        ]);

        $order = Order::create($validated);
        return response()->json($order, 201);
    }
}
