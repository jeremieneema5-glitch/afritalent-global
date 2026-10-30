/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { JobOffer, CandidateProfile, Application, ChatMessage, TargetCountry } from './types';
import { INITIAL_JOBS, INITIAL_CANDIDATES } from './data/mockData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { JobList } from './components/JobList';
import { JobDetailModal } from './components/JobDetailModal';
import { TalentDirectory } from './components/TalentDirectory';
import { VisaSimulator } from './components/VisaSimulator';
import { VisaGuides } from './components/VisaGuides';
import { CvBuilderModal } from './components/CvBuilderModal';
import { CandidateProfileModal } from './components/CandidateProfileModal';
import { PostJobModal } from './components/PostJobModal';
import { RecruiterPricingModal } from './components/RecruiterPricingModal';
import { MessagingModal } from './components/MessagingModal';
import { FraudPreventionBanner } from './components/FraudPreventionBanner';
import { Footer } from './components/Footer';
import { CostOfLivingCalculator } from './components/CostOfLivingCalculator';
import { InterviewSimulator } from './components/InterviewSimulator';
import { RecruitmentEvents } from './components/RecruitmentEvents';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    senderRole: 'recruteur',
    senderName: 'Nordic Cloud Solutions Inc. (Canada)',
    recipientName: 'Mamadou Diallo',
    text: 'Bonjour Mamadou, nous avons analysé votre profil d’ingénieur DevOps à Dakar. Votre maîtrise de Kubernetes et d’AWS correspond parfaitement aux critères du Programme Mobilité Francophone d’IRCC (dispense d’EIMT). Seriez-vous disponible pour un premier entretien en visioconférence ?',
    timestamp: 'Hier à 16:45',
    isInterviewInvite: true,
    interviewDetails: {
      date: '2026-11-04',
      time: '15:00 GMT',
      platform: 'Google Meet'
    }
  },
  {
    id: 'msg-2',
    senderRole: 'candidat',
    senderName: 'Mamadou Diallo',
    recipientName: 'Nordic Cloud Solutions Inc. (Canada)',
    text: 'Bonjour, merci infiniment pour votre message. C’est avec grand plaisir que je confirme ma disponibilité le 4 novembre à 15h00 GMT. Mon passeport est valide et mes attestations de diplômes d’ingénieur sont déjà numérisées.',
    timestamp: 'Hier à 17:10'
  },
  {
    id: 'msg-3',
    senderRole: 'recruteur',
    senderName: 'Clinique Universitaire Lémanique (Suisse)',
    recipientName: 'Mamadou Diallo',
    text: 'Bonjour, nous recrutons actuellement des talents d’Afrique dans le cadre des contingents suisses 2026 pour des postes spécialisés. N’hésitez pas à postuler à nos offres ouvertes.',
    timestamp: 'Il y a 3 jours à 11:20'
  }
];

export default function App() {
  // Navigation & Role State
  const [activeTab, setActiveTab] = useState<'jobs' | 'talents' | 'simulator' | 'guides' | 'cv-builder' | 'dashboard' | 'cost-of-living' | 'interview-prep' | 'events'>('jobs');
  const [userRole, setUserRole] = useState<'candidat' | 'recruteur'>('candidat');
  const [selectedCountry, setSelectedCountry] = useState<TargetCountry | 'Tous'>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Data State with LocalStorage
  const [jobs, setJobs] = useState<JobOffer[]>(() => {
    const saved = localStorage.getItem('afritalent_jobs');
    return saved ? JSON.parse(saved) : INITIAL_JOBS;
  });

  const [candidates, setCandidates] = useState<CandidateProfile[]>(() => {
    const saved = localStorage.getItem('afritalent_candidates');
    return saved ? JSON.parse(saved) : INITIAL_CANDIDATES;
  });

  const [candidateProfile, setCandidateProfile] = useState<CandidateProfile>(() => {
    const saved = localStorage.getItem('afritalent_my_profile');
    return saved ? JSON.parse(saved) : INITIAL_CANDIDATES[0];
  });

  const [applications, setApplications] = useState<Application[]>(() => {
    const saved = localStorage.getItem('afritalent_applications');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 'app-init-1',
        jobId: 'job-ca-1',
        jobTitle: 'Ingénieur DevOps Cloud & Kubernetes (Senior)',
        company: 'Nordic Cloud Solutions Inc.',
        candidateId: 'cand-1',
        candidateName: 'Mamadou Diallo',
        candidateCountry: 'Sénégal',
        appliedDate: '27 Oct 2026',
        status: 'Entretien planifié',
        coverNote: 'Candidature spontanée avec projet de relocalisation via Mobilité Francophone.'
      }
    ];
  });

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('afritalent_messages');
    return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
  });

  // Modal visibility states
  const [selectedJob, setSelectedJob] = useState<JobOffer | null>(null);
  const [isPostJobOpen, setIsPostJobOpen] = useState<boolean>(false);
  const [isPricingOpen, setIsPricingOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isCvBuilderOpen, setIsCvBuilderOpen] = useState<boolean>(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState<boolean>(false);
  const [activeChatRecipient, setActiveChatRecipient] = useState<string | undefined>(undefined);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('afritalent_jobs', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('afritalent_candidates', JSON.stringify(candidates));
  }, [candidates]);

  useEffect(() => {
    localStorage.setItem('afritalent_my_profile', JSON.stringify(candidateProfile));
  }, [candidateProfile]);

  useEffect(() => {
    localStorage.setItem('afritalent_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('afritalent_messages', JSON.stringify(messages));
  }, [messages]);

  // Handlers
  const handleApplyToJob = (jobId: string, coverNote: string) => {
    const job = jobs.find((j) => j.id === jobId);
    if (!job) return;

    const newApp: Application = {
      id: `app-${Date.now()}`,
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      candidateId: candidateProfile.id,
      candidateName: candidateProfile.fullName,
      candidateCountry: candidateProfile.currentCountry,
      appliedDate: 'Aujourd’hui',
      status: 'Reçue',
      coverNote
    };

    setApplications((prev) => [newApp, ...prev]);

    // Also notify via chat thread
    const notificationMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderRole: 'candidat',
      senderName: candidateProfile.fullName,
      recipientName: `${job.company} (${job.country})`,
      text: `Nouvelle candidature soumise pour le poste de « ${job.title} ».\n\n${coverNote}`,
      timestamp: 'À l’instant'
    };
    setMessages((prev) => [...prev, notificationMsg]);
  };

  const handleAddJob = (newJob: JobOffer) => {
    setJobs((prev) => [newJob, ...prev]);
  };

  const handleUpdateCandidateProfile = (updated: Partial<CandidateProfile>) => {
    setCandidateProfile((prev) => {
      const next = { ...prev, ...updated };
      return next;
    });
    // Also update in directory if it's the current user
    setCandidates((prev) =>
      prev.map((c) => (c.id === candidateProfile.id ? { ...c, ...updated } : c))
    );
  };

  const handleSendMessage = (
    text: string,
    recipientName: string,
    isInterviewInvite?: boolean,
    interviewDate?: string,
    interviewTime?: string
  ) => {
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderRole: userRole,
      senderName: userRole === 'candidat' ? candidateProfile.fullName : 'Recruteur International',
      recipientName,
      text,
      timestamp: 'À l’instant',
      isInterviewInvite,
      interviewDetails: isInterviewInvite
        ? {
            date: interviewDate || '2026-11-05',
            time: interviewTime || '14:30 GMT',
            platform: 'Google Meet'
          }
        : undefined
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const handleOpenDirectChat = (companyOrName: string, jobTitle?: string) => {
    setActiveChatRecipient(companyOrName);
    setIsMessagesOpen(true);
    if (selectedJob) {
      setSelectedJob(null);
    }
  };

  const handleContactCandidateFromDirectory = (candidate: CandidateProfile, isInterview?: boolean) => {
    setActiveChatRecipient(candidate.fullName);
    setIsMessagesOpen(true);
    if (isInterview) {
      handleSendMessage(
        `Bonjour ${candidate.fullName}, nous avons remarqué votre profil de ${candidate.title}. Votre expérience nous intéresse beaucoup pour nos opportunités avec parrainage de visa.`,
        candidate.fullName,
        true,
        '2026-11-06',
        '14:00 GMT'
      );
    }
  };

  const hasCandidateAppliedToJob = (jobId: string) => {
    return applications.some((app) => app.jobId === jobId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 selection:bg-blue-100">
      {/* Top Bar Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userRole={userRole}
        setUserRole={setUserRole}
        onOpenPostJob={() => setIsPostJobOpen(true)}
        onOpenPricing={() => setIsPricingOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenMessages={() => {
          setActiveChatRecipient(undefined);
          setIsMessagesOpen(true);
        }}
        unreadCount={messages.length > 0 ? 1 : 0}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {activeTab === 'dashboard' && (
          <Dashboard
            userRole={userRole}
            setUserRole={setUserRole}
            candidateProfile={candidateProfile}
            applications={applications}
            jobs={jobs}
            onOpenPostJob={() => setIsPostJobOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onOpenMessages={() => {
              setActiveChatRecipient(undefined);
              setIsMessagesOpen(true);
            }}
            onSelectJob={(job) => setSelectedJob(job)}
            onOpenCvBuilder={() => setIsCvBuilderOpen(true)}
            onNavigateTab={setActiveTab}
            onUpdateProfile={handleUpdateCandidateProfile}
            onOpenProfile={() => setIsProfileOpen(true)}
          />
        )}

        {activeTab === 'jobs' && (
          <>
            <Hero
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onStartSimulation={() => setActiveTab('simulator')}
              totalJobsCount={jobs.length}
            />

            <JobList
              jobs={jobs}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSelectJob={(job) => setSelectedJob(job)}
              onOpenSimulator={() => setActiveTab('simulator')}
            />
          </>
        )}

        {activeTab === 'talents' && (
          <TalentDirectory
            candidates={candidates}
            onContactCandidate={handleContactCandidateFromDirectory}
            onOpenCvBuilder={() => setIsCvBuilderOpen(true)}
            onOpenProfile={() => setIsProfileOpen(true)}
            userRole={userRole}
          />
        )}

        {activeTab === 'simulator' && (
          <VisaSimulator
            onFilterByCountry={(country) => {
              setSelectedCountry(country);
              setActiveTab('jobs');
            }}
            onOpenCvBuilder={() => setIsCvBuilderOpen(true)}
          />
        )}

        {activeTab === 'guides' && (
          <VisaGuides
            onSelectCountryFilter={(country) => {
              setSelectedCountry(country);
              setActiveTab('jobs');
            }}
          />
        )}

        {activeTab === 'cv-builder' && (
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
                Formats Conformes ATS & Immigration
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Générateur de CV International pour Talents d'Afrique
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Concevez un CV respectant les normes strictes d'embauche du Canada (sans photo ni date de naissance), d'Europe ou de Nouvelle-Zélande.
              </p>
              <div className="mt-4">
                <button
                  onClick={() => setIsCvBuilderOpen(true)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-xs"
                >
                  Ouvrir l'éditeur de CV en plein écran →
                </button>
              </div>
            </div>

            {/* Quick Embedded Builder view */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center max-w-xl mx-auto">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Votre CV est prêt pour la mise aux normes
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Profil actif : <strong>{candidateProfile.fullName}</strong> ({candidateProfile.title})
              </p>
              <button
                onClick={() => setIsCvBuilderOpen(true)}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Personnaliser et exporter mon CV
              </button>
            </div>
          </div>
        )}

        {activeTab === 'cost-of-living' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <CostOfLivingCalculator />
          </div>
        )}

        {activeTab === 'interview-prep' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <InterviewSimulator />
          </div>
        )}

        {activeTab === 'events' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <RecruitmentEvents />
          </div>
        )}
      </main>

      {/* Fraud Prevention & Transparency Banner */}
      <FraudPreventionBanner />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Modals */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          candidateProfile={candidateProfile}
          hasApplied={hasCandidateAppliedToJob(selectedJob.id)}
          onApply={handleApplyToJob}
          onOpenDirectChat={handleOpenDirectChat}
        />
      )}

      {isPostJobOpen && (
        <PostJobModal
          onClose={() => setIsPostJobOpen(false)}
          onAddJob={handleAddJob}
        />
      )}

      {isPricingOpen && (
        <RecruiterPricingModal
          onClose={() => setIsPricingOpen(false)}
          onSelectPlan={(plan) => {
            setIsPricingOpen(false);
            setUserRole('recruteur');
            setIsPostJobOpen(true);
          }}
        />
      )}

      {isProfileOpen && (
        <CandidateProfileModal
          profile={candidateProfile}
          applications={applications}
          onClose={() => setIsProfileOpen(false)}
          onUpdateProfile={handleUpdateCandidateProfile}
          onOpenCvBuilder={() => {
            setIsProfileOpen(false);
            setIsCvBuilderOpen(true);
          }}
        />
      )}

      {isCvBuilderOpen && (
        <CvBuilderModal
          candidateProfile={candidateProfile}
          onClose={() => setIsCvBuilderOpen(false)}
          onSaveProfile={handleUpdateCandidateProfile}
          onOpenPricing={() => setIsPricingOpen(true)}
        />
      )}

      {isMessagesOpen && (
        <MessagingModal
          messages={messages}
          onSendMessage={handleSendMessage}
          onClose={() => setIsMessagesOpen(false)}
          userRole={userRole}
          initialRecipient={activeChatRecipient}
        />
      )}
    </div>
  );
}
