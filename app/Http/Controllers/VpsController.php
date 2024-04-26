<?php

namespace App\Http\Controllers;

use App\Jobs\UpdateVpsStock;
use App\Models\VpsOsTemplateGroups;
use App\Models\VpsProductGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VpsController extends Controller
{
    public function home(Request $request) {
        $productGroups = VpsProductGroup::with('vps_plans.vps_compute_region')->get()->sortByDesc('price');
        //return dd($SshKeys);

        return Inertia::render('CloudServers', ['productGroups' => $productGroups]);

    }
}
