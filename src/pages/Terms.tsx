import { FC } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Terms: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
                <p className="text-gray-600">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Déjà Vu website for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
                <p className="text-gray-600">
                  The materials on Déjà Vu website are provided on an 'as is' basis. Déjà Vu makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Limitations</h2>
                <p className="text-gray-600">
                  In no event shall Déjà Vu or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Déjà Vu website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Revisions and Errata</h2>
                <p className="text-gray-600">
                  The materials appearing on Déjà Vu website could include technical, typographical, or photographic errors. Déjà Vu does not warrant that any of the materials on its website are accurate, complete or current.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Links</h2>
                <p className="text-gray-600">
                  Déjà Vu has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Déjà Vu of the site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Governing Law</h2>
                <p className="text-gray-600">
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Terms;
