<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class InscriptionGratuitConfirme extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public  $user = null;
    public  $formation = null;
    public $pathImage = null;
    public function __construct(object $user, object $formation)
    {
        $formation->details = json_decode($formation->details);
        $formation->audience = json_decode($formation->audience);
        $formation->prerequis = json_decode($formation->prerequis);

        $this->user = $user;
        $this->formation = $formation;
        $this->pathImage = Storage::url($formation->image);
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Inscription Gratuite Confirmé',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.inscriptionGratuitConfirme',
            with: [
                'user' => $this->user,
                'formation' => $this->formation,
                'pathImage' => $this->pathImage,
                ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [
            Attachment::fromPath(public_path($this->pathImage))
            ->as('image.png')
            ->withMime('image/jpeg'),
        ];
    }
}
