<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DedicatedOsTemplateGroups extends Model
{
    use HasFactory;

    public function templates()
    {
        return $this->hasMany(DedicatedOsTemplate::class, 'dedicated_os_template_group_id');
    }
}
