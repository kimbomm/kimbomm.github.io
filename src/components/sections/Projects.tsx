import { soloProjects, workProjects } from '@content/projects';
import type { ProjectGroup } from '@content/types';
import { formatRange, formatTenure } from '@/lib/tenure';
import { Section } from '@/components/ui/Section';
import { ProjectTabs, type GroupView } from './ProjectTabs';

function toView(group: ProjectGroup, now: Date): GroupView {
  const hasPeriod = group.start && group.end;
  return {
    company: group.company,
    range: hasPeriod ? formatRange(group.start!, group.end!) : undefined,
    tenure: hasPeriod ? formatTenure(group.start!, group.end!, now) : undefined,
    projects: group.projects,
  };
}

export function Projects() {
  const now = new Date();
  return (
    <Section id="projects" title="프로젝트" description="대표 사례 외에 진행한 주요 프로젝트입니다.">
      <ProjectTabs
        work={workProjects.map((g) => toView(g, now))}
        solo={soloProjects.map((g) => toView(g, now))}
      />
    </Section>
  );
}
