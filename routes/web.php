<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LayoutController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\ContactUsFormController;
use App\Http\Controllers\SupportFormController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\FileController;
use App\Http\Controllers\AzureAuthController;
use App\Http\Controllers\SendDailyEmail;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use SocialiteProviders\Azure\AzureProvider;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/gtms', function () {
    return Inertia::render('GTMS');
})->middleware(['auth', 'verified'])->name('gtms');

Route::get('/gtam', function () {
    return Inertia::render('GTAM');
})->middleware(['auth', 'verified'])->name('gtam');

Route::get('/gtrs', function () {
    return Inertia::render('GTRS');
})->middleware(['auth', 'verified'])->name('gtrs');

Route::get('/gtw', function () {
    return Inertia::render('GTW');
})->middleware(['auth', 'verified'])->name('gtw');

Route::get('/Main', function () {
    return Inertia::render('Layout');
})->middleware(['auth', 'verified'])->name('layout');

Route::get('/opportunities', function () {
    return Inertia::render('Opportunities');
})-> name('opportunities');

Route::get('/terms', function () {
    return Inertia::render('Terms');
})-> name('terms');

Route::get('/palletterms', function () {
    return Inertia::render('PalletTerms');
})-> name('palletterms');

Route::get('/capabilitystatement', function () {
    return Inertia::render('Capability');
})-> name('capabilitystatement');

// Route::get('/news', function () {
//     return Inertia::render('NewsPage');
// })-> name('news');

Route::get('/news/{id}', function ($id) {
    return Inertia::render('NewsPage', ['id' => $id]);
})->name('news');

Route::post('/contact', [ContactFormController::class, 'submitContactForm'])->name('contact.submit');
Route::post('/contactus', [ContactUsFormController::class, 'submitContactUsForm'])->name('contactus.submit');
Route::post('/support', [SupportFormController::class, 'submitSupportForm'])->name('support.submit');

Route::get('/download-docx', function() {
    $pathToFile = public_path('pdf/20230630-Gold-Tiger-Logistics-Solutions-Trading-Terms-and-Conditions.pdf');
    $headers = array(
        'Content-Type: application/pdf',
    );
    return response()->download($pathToFile, '20230630-Gold-Tiger-Logistics-Solutions-Trading-Terms-and-Conditions.pdf', $headers);
});
// Route::post('/auth/azure', function (Request $request) {
//     $data = $request->json()->all();
//     $email = $data['email'];
//     $UserId = $data['UserId'];
//     return Socialite::driver('azure')
//     ->with(['login_hint' => $email]) // Pass the email address as a parameter to the Azure AD login page
//     ->redirect();
// });


Route::post('/sendemail', [SendDailyEmail::class, 'SendEmail']);



Route::get('/downloadGTLS-docx', function() {
    $pathToFile = public_path('docs/Gold-Tiger-Capability-Statement-2020-12-24.pdf');
    $headers = array(
        'Content-Type: application/docx',
    );
    return response()->download($pathToFile, 'Gold-Tiger-Capability-Statement-2020-12-24.pdf', $headers);
});

Route::get('/downloadGTLS-Pallets', function() {
    $pathToFile = public_path('docs/GTLS Pallet Service Trading Policy 2023_08_09.pdf');
    $headers = array(
        'Content-Type: application/docx',
    );
    return response()->download($pathToFile, 'GTLS Pallet Service Trading Policy 2023_08_09.pdf', $headers);
});

Route::get('/checkAuth', [AuthenticatedSessionController::class, 'checkAuth']);
Route::get('/auth/azure', function (Request $request) {
    // $data = $request->json()->all();
    $email = $request->query('email');
    $UserId = $request->query('UserId');
    $Type_id = $request->query('TypeId');
    return Socialite::driver('azure')
    ->with(['login_hint' => $email]) // Pass the email address as a parameter to the Azure AD login page
    ->redirectUrl(url('/auth/azure/callback?UserId=' . $UserId . '&TypeId=' . $Type_id))
    ->redirect();
});
Route::get('/auth/azure/callback', [AzureAuthController::class, 'handleCallback']);
Route::get('/checkEmail', [AzureAuthController::class, 'handleClickCallBack']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('/users', [RegisteredUserController::class, 'getCurrentUserName'])->name('/gtms');
    Route::get('/childrens/{id}', [RegisteredUserController::class, 'getChildrens'])->name('/gtms');
    Route::get('/childrenlist/{id}', [RegisteredUserController::class, 'getChildrensList'])->name('/gtms');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/user/{id}', [RegisteredUserController::class, 'getUserName']);
    Route::get('/safety/{user_id}', [RegisteredUserController::class, 'getSafetyData']);
    Route::get('/findUserById/{user_id}',[RegisteredUserController::class, 'searchUserByName']);
    Route::delete('/delete-file', [RegisteredUserController::class, 'deleteFile']);

});

Route::get('/session-data', function () {
    return response()->json([        'userr' => session('userr')    ]);
});

Route::fallback(function () {
    return Inertia::render('NotFoundPage', [
        // Add any data you want to pass to the React component
    ]);
});

require __DIR__.'/auth.php';
