<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VpsOsTemplate extends Model
{
    use HasFactory;

    public function group()
    {
        return $this->belongsTo(VpsOsTemplateGroups::class, 'vps_os_template_group_id');
    }
}
