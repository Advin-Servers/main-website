<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DedicatedPlan extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function productGroup()
    {
        return $this->belongsTo(DedicatedProductGroup::class, 'dedicated_product_group_id');
    }

    public function dedicated_compute_region()
    {
        return $this->belongsTo(DedicatedComputeRegion::class, 'dedicated_compute_region_id');
    }
}
