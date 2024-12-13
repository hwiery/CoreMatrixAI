import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDownIcon 
          className={`w-5 h-5 transition-transform duration-300 
            ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-300 space-y-4">
              {Array.isArray(answer) ? (
                answer.map((item, index) => (
                  <div key={index} className="pl-4">
                    {item.title && (
                      <div className="font-medium mb-2">{item.title}</div>
                    )}
                    {item.content && (
                      <div className="text-gray-400">{item.content}</div>
                    )}
                  </div>
                ))
              ) : (
                <div className="pl-4 text-gray-400">{answer}</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();

  const faqData = [
    {
      question: t('landing.faq.questions.consultation.question'),
      answer: [
        {
          title: t('landing.faq.questions.consultation.steps.step1.title'),
          content: t('landing.faq.questions.consultation.steps.step1.content')
        },
        {
          title: t('landing.faq.questions.consultation.steps.step2.title'),
          content: t('landing.faq.questions.consultation.steps.step2.content')
        },
        {
          content: t('landing.faq.questions.consultation.steps.note.content')
        }
      ]
    },
    {
      question: t('landing.faq.questions.matching_speed.question'),
      answer: t('landing.faq.questions.matching_speed.answers').map((answer, index) => ({
        content: answer
      }))
    },
    {
      question: t('landing.faq.questions.pricing.question'),
      answer: t('landing.faq.questions.pricing.answers').map((answer, index) => ({
        content: answer
      }))
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        {t('landing.faq.title')}
      </h2>
      <div className="divide-y divide-gray-700">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}