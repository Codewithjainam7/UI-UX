/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Layout } from './components/Layout';
import { InboxView } from './views/InboxView';
import { AnalyticsView } from './views/AnalyticsView';
import { ConfigurationView } from './views/ConfigurationView';
import { ComponentLibraryView } from './views/ComponentLibraryView';

export default function App() {
  const [activeTab, setActiveTab] = useState('inbox');

  const renderView = () => {
    switch (activeTab) {
      case 'inbox':
        return <InboxView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'automation':
        return <ConfigurationView />;
      case 'components':
      case 'templates':
        return <ComponentLibraryView />;
      default:
        return (
          <div className="p-8 flex items-center justify-center h-full text-on-surface-variant">
            Select a view from the sidebar.
          </div>
        );
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderView()}
    </Layout>
  );
}
