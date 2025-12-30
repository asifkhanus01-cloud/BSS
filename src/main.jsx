import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import Layout from './components/Layout.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { PageLoading } from './components/Loading.jsx'

// Code Splitting: Lazy load all page components
const HomePage = lazy(() => import('../home/index.jsx'));
const AboutPage = lazy(() => import('../about-us/index.jsx'));
const AcademicsPage = lazy(() => import('../academics/index.jsx'));
const GalleryPage = lazy(() => import('../gallery/index.jsx'));
const ContactPage = lazy(() => import('../contact-us/index.jsx'));
const AdmissionsPage = lazy(() => import('../admissions/index.jsx'));
const StaffPage = lazy(() => import('../staff/index.jsx'));
const FaqPage = lazy(() => import('../faq/index.jsx'));
const BlogPage = lazy(() => import('../blog/index.jsx'));
const SingleBlogPage = lazy(() => import('../single-blog/index.jsx'));
const DirectorProfilePage = lazy(() => import('../[director-name]-profile/index.jsx'));
const EventsPage = lazy(() => import('../events/index.jsx'));
const EventDetailPage = lazy(() => import('../events/components/EventDetail.jsx').then(module => ({ default: module.EventDetail })));
const StudentLifePage = lazy(() => import('../student-life/index.jsx'));
const CareersPage = lazy(() => import('../careers/index.jsx'));
const SingleJobPage = lazy(() => import('../single-job-details/index.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <Suspense fallback={<PageLoading />}>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about-us" element={<AboutPage />} />
                            <Route path="/academics" element={<AcademicsPage />} />
                            <Route path="/gallery" element={<GalleryPage />} />
                            <Route path="/contact-us" element={<ContactPage />} />
                            <Route path="/admissions" element={<AdmissionsPage />} />
                            <Route path="/staff" element={<StaffPage />} />
                            <Route path="/faq" element={<FaqPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/blog/:slug" element={<SingleBlogPage />} />
                            <Route path="/waleed-khan-khalil" element={<DirectorProfilePage />} />
                            <Route path="/noman-khan" element={<DirectorProfilePage />} />
                            <Route path="/events" element={<EventsPage />} />
                            <Route path="/events/:slug" element={<EventDetailPage />} />
                            <Route path="/student-life" element={<StudentLifePage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/careers/:slug" element={<SingleJobPage />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>,
)
