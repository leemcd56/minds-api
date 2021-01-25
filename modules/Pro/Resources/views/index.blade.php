@extends('pro::layouts.master')

@section('content')
    <h1>Hello World</h1>

    <p>
        This view is loaded from module: {!! config('pro.name') !!}
    </p>
@endsection
