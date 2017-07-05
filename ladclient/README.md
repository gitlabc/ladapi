a React.js client for LadApi

## how wo use laravel to route ReactJs
### add ln
```bash
cd public
ln -s ../ladclient/build/static/ ./static
ln -s ../ladclient/build/service-worker.js ./service-worker.js

cd resources/views/
ln -s ../../ladclient/build/index.html ./index.blade.php
```

### add route
modify routes/web.php to
```php
Route::get('/', function () {
    return view('index');
});
```
