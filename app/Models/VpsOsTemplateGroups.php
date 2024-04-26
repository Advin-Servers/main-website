<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VpsOsTemplateGroups extends Model
{
    use HasFactory;

    public function templates()
    {
        return $this->hasMany(VpsOsTemplate::class, 'vps_os_template_group_id');
    }
}
