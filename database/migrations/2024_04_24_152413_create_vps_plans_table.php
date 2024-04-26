<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vps_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('vps_product_group_id')->constrained()->onDelete('cascade');
            $table->foreignId('vps_compute_region_id')->constrained()->onDelete('cascade');
            $table->integer('vcpu_cores');
            $table->integer('memory');
            $table->integer('bandwidth');
            $table->integer('disk');
            $table->decimal('price')->nullable();
            $table->boolean('stock');
            $table->string('deployment_time');
            $table->string('whmcs_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vps_plans');
    }
};
