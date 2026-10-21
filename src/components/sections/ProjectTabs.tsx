'use client';

import { useState, type KeyboardEvent } from 'react';
import type { Project } from '@content/types';
import { ProjectItem } from './ProjectItem';
import styles from './Projects.module.css';

/** 서버에서 기간 문자열까지 계산해서 넘긴다 (클라이언트에서 new Date()를 쓰면 하이드레이션 불일치가 생길 수 있음) */
export type GroupView = {
  company?: string;
  range?: string;
  tenure?: string;
  projects: Project[];
};

type TabKey = 'work' | 'solo';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'work', label: '직장' },
  { key: 'solo', label: '개인' },
];

type Props = { work: GroupView[]; solo: GroupView[] };

export function ProjectTabs({ work, solo }: Props) {
  const [active, setActive] = useState<TabKey>('work');
  const groups: Record<TabKey, GroupView[]> = { work, solo };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const step = e.key === 'ArrowRight' ? 1 : TABS.length - 1;
    const next = TABS[(index + step) % TABS.length];
    setActive(next.key);
    document.getElementById(`tab-${next.key}`)?.focus();
  };

  return (
    <>
      <div className={styles.tabs} role="tablist" aria-label="프로젝트 구분">
        {TABS.map((tab, i) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            id={`tab-${tab.key}`}
            aria-selected={active === tab.key}
            aria-controls={`panel-${tab.key}`}
            tabIndex={active === tab.key ? 0 : -1}
            onClick={() => setActive(tab.key)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {TABS.map((tab) => (
        <div
          key={tab.key}
          role="tabpanel"
          id={`panel-${tab.key}`}
          aria-labelledby={`tab-${tab.key}`}
          className={styles.panel}
          hidden={active !== tab.key}
        >
          {groups[tab.key].map((group, gi) => (
            <div key={group.company ?? gi} className={styles.group}>
              {group.company ? (
                <div className={styles.grp}>
                  <h3>{group.company}</h3>
                  <span>
                    {group.range}
                    {group.tenure ? ` · ${group.tenure}` : ''}
                  </span>
                </div>
              ) : null}
              <ul className={styles.rows}>
                {group.projects.map((p, pi) => (
                  <ProjectItem key={pi} project={p} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
