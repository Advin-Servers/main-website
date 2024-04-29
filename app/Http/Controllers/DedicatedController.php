<?php

namespace App\Http\Controllers;

use App\Models\DedicatedProductGroup;
use App\Models\VpsOsTemplateGroups;
use App\Models\VpsProductGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DedicatedController extends Controller
{
    public function home(Request $request) {
        $productGroups = DedicatedProductGroup::with('dedicated_plans.dedicated_compute_region')->get()->sortByDesc('price');
        //return dd($SshKeys);
        return Inertia::render('DedicatedServers', ['productGroups' => $productGroups]);

    }
}
