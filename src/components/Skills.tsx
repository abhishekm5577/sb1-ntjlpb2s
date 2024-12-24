import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSkills } from '../hooks/useSkills';

export function Skills() {
  const { skills, loading } = useSkills();
  const categories = ['frontend', 'backend', 'tools'] as const;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skills.filter((skill) => skill.category === category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category, skills }: { 
  category: string; 
  skills: Array<{ id: string; name: string; icon_name: string }>;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-semibold mb-6 capitalize">{category}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div 
            key={skill.id}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50"
          >
            <span className="text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}