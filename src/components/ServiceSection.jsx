"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Reusable Icon Wrapper
const CustomIcon = ({ children }) => (
  <div style={{
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  </div>
);

// List of Services
const services = [
  {
    href: "/pollution-control",
    icon: (
      <CustomIcon>
        <path d="M21 49C21 45.5 24.5 42 28 38.5C31.5 35 35 31.5 35 24.5C35 31.5 38.5 35 42 38.5C45.5 42 49 45.5 49 49" stroke="#ff7900" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="35" cy="24.5" rx="10.5" ry="14" stroke="#ff7900" strokeWidth="3" fill="none"/>
        <path d="M24.5 52.5C24.5 50.4 26 49 28 49H42C44 49 45.5 50.4 45.5 52.5V59.5H24.5V52.5Z" stroke="#ff7900" strokeWidth="3" fill="none"/>
      </CustomIcon>
    ),
    title: "Pollution Control",
    desc: "Advanced air pollution control systems, dust collectors, and emission monitoring solutions."
  },
  {
    href: "/clean-rooms",
    icon: (
      <CustomIcon>
        <rect x="14" y="17.5" width="42" height="35" rx="3.5" stroke="#ff7900" strokeWidth="3"/>
        <path d="M21 28L31.5 38.5L49 21" stroke="#ff7900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="24.5" y1="14" x2="24.5" y2="17.5" stroke="#ff7900" strokeWidth="2.5"/>
        <line x1="35" y1="14" x2="35" y2="17.5" stroke="#ff7900" strokeWidth="2.5"/>
        <line x1="45.5" y1="14" x2="45.5" y2="17.5" stroke="#ff7900" strokeWidth="2.5"/>
      </CustomIcon>
    ),
    title: "Clean Rooms & HVAC",
    desc: "State-of-the-art clean room design, HVAC systems, and controlled environment solutions."
  },
  {
    href: "/cranes-handling",
    icon: (
      <CustomIcon>
        <path d="M14 49H56" stroke="#ff7900" strokeWidth="3" strokeLinecap="round"/>
        <rect x="21" y="31.5" width="28" height="17.5" rx="2" stroke="#ff7900" strokeWidth="3"/>
        <circle cx="26.6" cy="49" r="3.5" stroke="#ff7900" strokeWidth="2.5"/>
        <circle cx="43.4" cy="49" r="3.5" stroke="#ff7900" strokeWidth="2.5"/>
        <path d="M31.5 24.5L35 17.5L38.5 24.5" stroke="#ff7900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="35" y1="17.5" x2="35" y2="31.5" stroke="#ff7900" strokeWidth="2.5"/>
      </CustomIcon>
    ),
    title: "Cranes & Material Handling",
    desc: "Heavy-duty cranes, conveyors, and automated material handling solutions."
  },
  {
    href: "/water-treatment",
    icon: (
      <CustomIcon>
        <path d="M35 17.5C35 17.5 24.5 28 24.5 38.5C24.5 44.1 28.95 49 35 49C41.05 49 45.5 44.1 45.5 38.5C45.5 28 35 17.5 35 17.5Z" stroke="#ff7900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="31.5" cy="35" r="2.1" fill="#ff7900"/>
      </CustomIcon>
    ),
    title: "Water Treatment",
    desc: "Comprehensive water treatment solutions including purification and recycling systems."
  },
  {
    href: "/industrial-machinery",
    icon: (
      <CustomIcon>
        <circle cx="35" cy="35" r="17.5" stroke="#ff7900" strokeWidth="3"/>
        <circle cx="35" cy="35" r="8.4" stroke="#ff7900" strokeWidth="3"/>
        <line x1="35" y1="21" x2="35" y2="28" stroke="#ff7900" strokeWidth="3"/>
        <line x1="35" y1="42" x2="35" y2="49" stroke="#ff7900" strokeWidth="3"/>
        <line x1="21" y1="35" x2="28" y2="35" stroke="#ff7900" strokeWidth="3"/>
        <line x1="42" y1="35" x2="49" y2="35" stroke="#ff7900" strokeWidth="3"/>
        <line x1="25.2" y1="25.2" x2="30.1" y2="30.1" stroke="#ff7900" strokeWidth="3"/>
        <line x1="39.9" y1="39.9" x2="44.8" y2="44.8" stroke="#ff7900" strokeWidth="3"/>
      </CustomIcon>
    ),
    title: "Industrial Machinery",
    desc: "High-quality machinery for manufacturing processes and productivity improvement."
  },
  {
    href: "/metal-casting",
    icon: (
      <CustomIcon>
        <rect x="17.5" y="24.5" width="35" height="28" stroke="#ff7900" strokeWidth="3" fill="none"/>
        <rect x="21" y="28" width="10.5" height="7" stroke="#ff7900" strokeWidth="2.5" fill="none"/>
        <rect x="21" y="38.5" width="10.5" height="7" stroke="#ff7900" strokeWidth="2.5" fill="none"/>
        <rect x="38.5" y="28" width="10.5" height="17.5" stroke="#ff7900" strokeWidth="2.5" fill="none"/>
        <line x1="17.5" y1="21" x2="24.5" y2="24.5" stroke="#ff7900" strokeWidth="2.5"/>
        <line x1="35" y1="17.5" x2="35" y2="24.5" stroke="#ff7900" strokeWidth="2.5"/>
        <line x1="52.5" y1="21" x2="45.5" y2="24.5" stroke="#ff7900" strokeWidth="2.5"/>
      </CustomIcon>
    ),
    title: "Metal Castings / Fabrication",
    desc: "Precision castings and fabrication services, compliant with international standards."
  }
];

// Component
export default function Services() {
  return (
    <section style={{
      padding: '60px 80px',
      background: '#ffffff'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Heading */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <div style={{
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: '15px',
            fontWeight: '400'
          }}>
          </div>
          <h2 style={{
            fontWeight: '800',
            fontSize: '48px',
            color: '#000',
            margin: '0'
          }}>
            Services We Provide
          </h2>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px 50px'
        }} className="services-grid-responsive">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '25px'
              }}
            >
              {/* Icon with Link */}
              <Link href={service.href} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '70px',
                    height: '70px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  {service.icon}
                </motion.div>
              </Link>

              {/* Text */}
              <div style={{
                flex: 1,
                textAlign: 'left'
              }}>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  marginBottom: '10px',
                  color: '#000'
                }}>
                  {service.title}
                </div>
                <div style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  {service.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .services-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 50px !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
