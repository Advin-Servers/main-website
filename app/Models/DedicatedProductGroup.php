<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DedicatedProductGroup extends Model
{
    use HasFactory;

    public function dedicated_plans() {
        return $this->hasMany(DedicatedPlan::class);
    }
}
