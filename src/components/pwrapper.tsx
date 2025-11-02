import { useEffect, useRef } from "react"
import gsap from "gsap"

interface pageWrapperProps  {
  children: React.ReactNode;
}
const PageWrapper = ({ children }: pageWrapperProps) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, pageRef);

  return () => ctx.revert(); // Proper cleanup
}, []);

  return <div ref={pageRef}>{children}</div>;
};

export default PageWrapper
