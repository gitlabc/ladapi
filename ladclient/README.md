a React.js client for LadApi

## how wo use laravel to route ReactJs
### add ln
```bash
cd /var/www/public
ln -fs ../ladclient/build/static/ ./static
ln -fs ../ladclient/build/service-worker.js ./service-worker.js

cd /var/www/resources/views/
ln -fs ../../ladclient/build/index.html ./index.blade.php
```

### add route
modify routes/web.php to
```php
Route::get('/', function () {
    return view('index');
});
```
