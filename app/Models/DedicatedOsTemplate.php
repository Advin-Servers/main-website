<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DedicatedOsTemplate extends Model
{
    use HasFactory;

    public function group()
    {
        return $this->belongsTo(DedicatedOsTemplateGroups::class, 'dedicated_os_template_group_id');
    }
}
