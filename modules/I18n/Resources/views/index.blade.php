@extends('i18n::layouts.master')

@section('content')
    <h1>Hello World</h1>

    <p>
        This view is loaded from module: {!! config('i18n.name') !!}
    </p>
@endsection
