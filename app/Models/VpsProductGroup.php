<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VpsProductGroup extends Model
{
    use HasFactory;

    public function vps_plans() {
        return $this->hasMany(VpsPlan::class);
    }
}
