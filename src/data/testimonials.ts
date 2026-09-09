export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  source: "Google";
}

export const googleReviews = {
  rating: 4.7,
  total: 207,
  url: "https://www.google.com/maps/place/Amabile+Negocios+Inmobiliarios/@-34.5773977,-58.636179,12z/data=!4m12!1m2!2m1!1samabile!3m8!1s0x95bcb65b64f197a5:0x82c258a95c42bcb0!8m2!3d-34.5774073!4d-58.4919513!9m1!1b1!15sCgdhbWFiaWxlWgkiB2FtYWJpbGWSARJyZWFsX2VzdGF0ZV9hZ2VuY3maAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnRLU0ZSVVRucFJiazVFVWtSR2FGVlVUVE5pYm14aFYwVTFhRTlWUlJBQuABAPoBBAgAEDM!16s%2Fg%2F1tfrcc89?entry=ttu",
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Micaela J. García Gulisano",
    rating: 5,
    text: "Estoy muy contenta con la atención de la inmobiliaria, fueron súper atentos en todo el proceso de visita, alquiler y después también. Siempre resolvieron mis dudas y responden súper rápido. Son una empresa familiar, y se nota que toman el trabajo con mucha seriedad y responsabilidad.",
    source: "Google",
  },
  {
    id: 2,
    name: "César Rapalini",
    rating: 5,
    text: "¡Excelente experiencia con la inmobiliaria Amabile! Acabamos de firmar nuestro contrato de alquiler y queremos destacar la atención. Desde el primer momento nos trataron de forma súper cálida, clara y profesional, haciendo que todo el proceso fuera impecable y sin estrés. Muy recomendables.",
    source: "Google",
  },
  {
    id: 3,
    name: "olivia chiderski",
    rating: 5,
    text: "Muy recomendable servicio. Adrian supo asesorarme muy bien y resolvió todas mis dudas. Te acompañan durante todo el proceso de principio a fin con mucha amabilidad y profesionalismo.",
    source: "Google",
  },
  {
    id: 4,
    name: "Luli Ramalle",
    rating: 5,
    text: "Excelente experiencia con la inmobiliaria. Destaco la amabilidad de todo el equipo, siempre dispuestos a ayudar y responder cualquier duda. Cumplieron con todo lo pactado en tiempo y forma, lo cual genera mucha confianza. Además, se percibe una gran calidad humana y transparencia en cada paso del proceso.",
    source: "Google",
  },
  {
    id: 5,
    name: "karina berisso",
    rating: 5,
    text: "La experiencia ha sido excelente. Responden a la brevedad y hacen un seguimiento personalizado de la consulta. Despejan todas las dudas en tiempo y forma y tienen un trato súper cordial, ameno, profesional, respetuoso y responsable. Sinceramente, gracias.",
    source: "Google",
  },
  {
    id: 6,
    name: "Cynthia Daiana Ferreira",
    rating: 5,
    text: "Recomiendo muchísimo a Inmobiliaria Gustavo Amabile porque son súper transparentes, amables y sus respuestas son rápidas. Resolvieron todas las dudas que tenía al momento de alquilar con ellos, son comprensivos con los horarios que uno puede tener esperando para cerrar una operación o para el pago del alquiler. Agradezco mucho la atención que me brindan cada vez que tengo una duda. Un 10 Adrián y Micaela.",
    source: "Google",
  },
];