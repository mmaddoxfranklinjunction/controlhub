import { useState } from "react";
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/shared/PageWrapper';

export default function MenuPanel() {
  const [showMissing, setShowMissing] = useState(true);

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Menu Overview</h1>
        {/* Data Quick View */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white shadow p-4 rounded-2xl flex flex-col items-center">
            <span className="text-2xl font-bold">36</span>
            <span className="text-xs text-gray-500">Total Menu Items</span>
          </div>
          <div className="bg-white shadow p-4 rounded-2xl flex flex-col items-center">
            <span className="text-2xl font-bold">$12.90</span>
            <span className="text-xs text-gray-500">Avg Price</span>
          </div>
        </div>
        {/* Attribute Checks */}
        <div className="mb-6 bg-white shadow rounded-2xl p-4">
          <div className="font-medium mb-2">Attributes</div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center">
              <span className="font-bold text-red-500">3</span>
              <span className="text-xs text-gray-500">Missing Descriptions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-yellow-600">2</span>
              <span className="text-xs text-gray-500">Missing Photos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold
