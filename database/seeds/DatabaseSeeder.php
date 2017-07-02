<?php
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::delete('delete from competitors');
        DB::delete('delete from events');
        DB::delete('delete from meetings');

        factory(\App\Meeting::class, 10)->create()->each(function ($m) {
            $race_num = 1;
            $es = factory(\App\Event::class, 10)->make()->sortBy('outcome')->each(function ($e) use (&$race_num) {
                $e['race_num'] = $race_num++;
                echo $e['race_num'] . ' ' . $e['description'] . PHP_EOL;
                $cs = factory(\App\Competitor::class, 10)->make();
                for($i=0; $i<$cs->count(); $i++){
                    $cs[$i]['saddle_number'] = $i+1;
                    $cs[$i]['barrier'] = $i+2;
                }
                $e->competitors()->saveMany($cs);
            });
            $m->events()->saveMany($es);
        });
    }
}
