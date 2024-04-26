<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VpsPlan extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function productGroup()
    {
        return $this->belongsTo(VpsProductGroup::class, 'vps_product_group_id');
    }

    public function vps_compute_region()
    {
        return $this->belongsTo(VpsComputeRegion::class, 'vps_compute_region_id');
    }
}
