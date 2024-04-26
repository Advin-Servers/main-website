<?php

namespace App\Http\Controllers;

use App\Jobs\UpdateVpsStock;
use App\Models\DedicatedPlan;
use App\Models\DedicatedProductGroup;
use App\Models\VpsPlan;
use App\Models\VpsProductGroup;
use Illuminate\Http\Request;

class StockApiController extends Controller
{
    public function home() {
        $vps = VpsProductGroup::with('vps_plans.vps_compute_region')->get()->sortByDesc('price');
        $dedicated = DedicatedProductGroup::with('dedicated_plans.dedicated_compute_region')->get()->sortByDesc('price');

        UpdateVpsStock::dispatch();

        return response()->json([
            'vps' => $vps,
            'dedicated' => $dedicated
        ]);
    }
}
