import React, { useState } from 'react';
import { ChatMessage } from '../types';

interface MessagingModalProps {
  messages: ChatMessage[];
  onSendMessage: (text: string, recipientName: string, isInterviewInvite?: boolean, interviewDate?: string, interviewTime?: string) => void;
  onClose: () => void;
  userRole: 'candidat' | 'recruteur';
  initialRecipient?: string;
}

export const MessagingModal: React.FC<MessagingModalProps> = ({
  messages,
  onSendMessage,
  onClose,
  userRole,
  initialRecipient
}) => {
  const [selectedRecipient, setSelectedRecipient] = useState<string>(
    initialRecipient || (messages.length > 0 ? messages[0].recipientName : 'Nordic Cloud Solutions Inc. (Canada)')
  );
  const [inputText, setInputText] = useState('');
  const [showInterviewForm, setShowInterviewForm] = useState(false);
  const [interviewDate, setInterviewDate] = useState('2026-11-05');
  const [interviewTime, setInterviewTime] = useState('14:30 GMT');

  // Group unique conversations
  const conversationPartners = Array.from(
    new Set(messages.flatMap(m => [m.senderName, m.recipientName]))
  ).filter(name => name !== 'Mamadou Diallo' && name !== 'Mon Profil Candidat');

  const filteredMessages = messages.filter(
    m => m.senderName === selectedRecipient || m.recipientName === selectedRecipient
  );

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText, selectedRecipient);
    setInputText('');
  };

  const handleSendInterview = () => {
    const inviteMessage = `Invitation officielle à un entretien en visioconférence : Date fixée au ${interviewDate} à ${interviewTime} (Heure GMT / UTC). Lien de visio sécurisé : https://meet.google.com/afr-glob-int`;
    onSendMessage(inviteMessage, selectedRecipient, true, interviewDate, interviewTime);
    setShowInterviewForm(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full h-[80vh] flex flex-col border border-slate-200 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Messagerie & Entretiens Directs</span>
              <span className="text-xs font-normal text-slate-500">
                (Échanges directs entre talents et employeurs)
              </span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg"
          >
            ✕
          </button>
        </div>

        {/* Messaging Body */}
        <div className="flex-1 flex overflow-hidden">
          {/* Conversation list sidebar */}
          <div className="w-1/3 border-r border-slate-200 bg-slate-50 overflow-y-auto p-3 space-y-2">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2 py-1">
              Discussions actives
            </div>
            {conversationPartners.map((partner) => {
              const isSelected = selectedRecipient === partner;
              return (
                <button
                  key={partner}
                  onClick={() => setSelectedRecipient(partner)}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition-colors ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-xs font-semibold text-blue-950'
                      : 'bg-white/60 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <div className="font-bold truncate text-slate-900">{partner}</div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                    Cliquez pour voir les messages
                  </div>
                </button>
              );
            })}
          </div>

          {/* Chat thread */}
          <div className="w-2/3 flex flex-col bg-white">
            {/* Thread Header */}
            <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
              <div>
                <div className="text-xs text-slate-500">Correspondant :</div>
                <div className="text-sm font-bold text-slate-900">{selectedRecipient}</div>
              </div>
              <button
                onClick={() => setShowInterviewForm(!showInterviewForm)}
                className="px-3 py-1.5 bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 text-xs font-semibold rounded-lg transition-colors"
              >
                📹 Planifier un entretien visio
              </button>
            </div>

            {/* Video Interview Form */}
            {showInterviewForm && (
              <div className="p-4 bg-blue-50/80 border-b border-blue-200 space-y-3">
                <div className="text-xs font-bold text-blue-950">
                  Planification d’un entretien vidéo international
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">Date</label>
                    <input
                      type="date"
                      value={interviewDate}
                      onChange={(e) => setInterviewDate(e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-700 mb-1">Heure (GMT / UTC)</label>
                    <input
                      type="text"
                      value={interviewTime}
                      onChange={(e) => setInterviewTime(e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowInterviewForm(false)}
                    className="px-3 py-1 text-xs text-slate-600 hover:text-slate-900"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleSendInterview}
                    className="px-4 py-1.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg"
                  >
                    Envoyer l'invitation
                  </button>
                </div>
              </div>
            )}

            {/* Messages Display */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {filteredMessages.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-xs">
                  Aucun message pour l'instant avec ce recruteur. Écrivez un message ci-dessous pour démarrer l'échange.
                </div>
              ) : (
                filteredMessages.map((msg) => {
                  const isMe = userRole === 'candidat' ? msg.senderRole === 'candidat' : msg.senderRole === 'recruteur';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                    >
                      <div className="text-[10px] text-slate-400 mb-1 px-1">
                        {msg.senderName} · {msg.timestamp}
                      </div>
                      <div
                        className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                          msg.isInterviewInvite
                            ? 'bg-amber-50 border border-amber-300 text-amber-950 font-medium shadow-xs'
                            : isMe
                            ? 'bg-slate-900 text-white rounded-br-xs'
                            : 'bg-slate-100 text-slate-800 rounded-bl-xs'
                        }`}
                      >
                        {msg.isInterviewInvite && (
                          <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1.5 pb-1 border-b border-amber-200">
                            <span>📅 Entretien Vidéo Confirmé</span>
                          </div>
                        )}
                        <p className="whitespace-pre-line">{msg.text}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="p-3 border-t border-slate-200 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Rédigez votre message à l'entreprise..."
                className="flex-1 text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shrink-0"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
