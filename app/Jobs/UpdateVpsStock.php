<?php

namespace App\Jobs;

use App\Models\VpsPlan;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;

class UpdateVpsStock implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {

    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $Vps = VpsPlan::all();
        foreach ($Vps as $vps) {
            try {
                $whmcs_url = $vps->whmcs_url;
                $request = Http::get($whmcs_url);
                if ($request->successful()) {
                    if (str_contains($request->body(), 'Out of Stock')) {
                        $vps->update([
                            'stock' => 0
                        ]);
                    } else {
                        $vps->update([
                            'stock' => 1
                        ]);
                    }
                }
            } catch (\Exception $e) {
                // Log error
            }
        }
    }
}
