#!/usr/bin/perl

use Mojo::Base -strict;
use Mojolicious::Lite;
use Mojo::IOLoop;
use Mojo::UserAgent;
use Data::Dumper;
use Getopt::Long;

use vars qw/$token/;
GetOptions(
    'token=s' => \$token
);

$token ||= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVfYXQiOjE0NTMzODIwNDIsInVzZXJJRCI6MX0.WgpkhdPdSbMqgCjLYeIx-KhauGfAkeswcscI-lKbPOU";

my $ws_api = "ws://localhost:3001/api/v1/start_chat?access_token=$token";

my $ua = Mojo::UserAgent->new(connect_timeout => 3, inactivity_timeout => 300);
$ua->websocket( $ws_api => sub {
    my ($ua, $tx) = @_;
    $tx->on(json => sub {
         my ($tx, $hash) = @_;
         say Dumper($hash);
    });

    print Dumper($tx->res->body);

    $tx->send({ json => {
        a => 1, m => "test message", r => 71
    }});
});


Mojo::IOLoop->start;

