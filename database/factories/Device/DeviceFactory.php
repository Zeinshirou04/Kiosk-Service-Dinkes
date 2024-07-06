<?php

namespace Database\Factories\Device;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Device\Device>
 */
class DeviceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => fake()->uuid(),
            'kode_puskesmas' => 'P01',
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
